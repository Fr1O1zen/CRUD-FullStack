# 📦 Aplikacja CRUD – React + Node.js + TypeScript

Projekt aplikacji webowej typu CRUD wykonany w oparciu o **React (frontend)** oraz **Node.js + Express + TypeScript (backend)**.

Celem projektu było skupienie się na **dobrych praktykach inżynieryjnych**, architekturze aplikacji oraz jakości kodu, a nie wyłącznie na implementacji funkcjonalności.

---

## 🚀 Opis projektu

Aplikacja umożliwia wykonywanie podstawowych operacji CRUD (Create, Read, Update, Delete) z wykorzystaniem REST API.

Projekt został zrealizowany z naciskiem na:

- czytelną i skalowalną strukturę projektu
- rozdzielenie odpowiedzialności (Separation of Concerns)
- walidację danych wejściowych
- centralną obsługę błędów
- testy jednostkowe
- gotowość pod dalszą rozbudowę (np. autoryzacja, role, rate limiting)

---

## 🧱 Architektura backendu

Backend został zaprojektowany warstwowo:
- routes → controllers → services → (warstwa danych)


### 🔹 Routes
Definiują endpointy i konfigurują middleware.

### 🔹 Controllers
Odpowiadają za obsługę warstwy HTTP (req/res).

### 🔹 Services
Zawierają logikę biznesową, niezależną od Express.

### 🔹 Middleware
Walidacja danych, obsługa błędów oraz logika pośrednia.

Takie podejście umożliwia:
- łatwiejsze testowanie
- większą czytelność
- prostszą rozbudowę projektu

---

## 🧪 Testy

Backend zawiera testy jednostkowe napisane w **Jest**.

Testy koncentrują się na:
- poprawnym działaniu logiki biznesowej
- scenariuszach błędnych danych
- weryfikacji kontraktu funkcji

Podejście testowe opiera się na sprawdzaniu zachowania systemu, a nie implementacji wewnętrznej.

---

## 💻 Frontend

Frontend został wykonany w oparciu o:

- React
- TypeScript
- komunikację z REST API

Zastosowano:
- komponenty funkcyjne
- hooki
- typowanie danych z backendu
- przejrzystą strukturę komponentów

---

## ⚙️ Technologie

### Backend
- Node.js
- Express
- TypeScript
- Jest

### Frontend
- React
- TypeScript

---

## 🎯 Cel projektu

Projekt stanowi demonstrację podejścia do budowy aplikacji w sposób zbliżony do środowiska produkcyjnego.

Nie był to jedynie „prosty CRUD”, lecz ćwiczenie z zakresu:

- architektury aplikacji
- odpowiedzialnego podziału warstw
- projektowania czytelnego kodu
- podstaw testowania
- przygotowania systemu pod dalszą rozbudowę

---

## 📌 Możliwe kierunki rozwoju

- autoryzacja JWT (httpOnly cookie)
- role użytkowników
- rate limiting
- Docker + CI/CD
- testy integracyjne

