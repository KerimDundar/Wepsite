package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "password"
	dbname   = "avukat-site"
)

func main() {
	// Postgres veritabanına bağlan
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Router oluştur
	r := mux.NewRouter()

	// Statik dosyaların sunulması
	fs := http.FileServer(http.Dir("static"))
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))

	// Ana sayfanın işlenmesi
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/html/index.html")
		fmt.Fprint(w, "Merhaba Dünya!")
	})
	r.HandleFunc("/hakkimda", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/html/hakkimda.html")
	})

	// Server'ı başlat
	log.Fatal(http.ListenAndServe(":8080", r))
}
