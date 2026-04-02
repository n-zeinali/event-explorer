# Event Explorer

A responsive event browsing application built with Laravel, React (Inertia), and Tailwind CSS. It provides an interactive map and a searchable, filterable event list for exploring air race events across multiple locations.

---

## Overview

This project was created as a demo assignment focused on frontend structure, UI interaction, and maintainable implementation.

Users can:
- explore events on a map
- browse events in a structured list
- search by title, address, or country
- filter events by category
- select an event from the list and focus it on the map

---

## Features

- 📍 Interactive map with custom markers
- 🎯 Select events from list or map
- 🔍 Search by location, title, or country
- 🧩 Filter by category (A / B)
- 🎨 Dynamic color system for events
- 🧱 Reusable layout with header and footer
- ⚙️ Clean architecture using service layer and API

---

## Data Source

### Version 1 (v1.0.0)
- Events loaded from a local JSON file

### Version 2 (v2.0.0)
- Events served through a Laravel API
- JSON file is now read by backend service

---

## Backend (Laravel)

- API endpoint: `GET /api/events`

- Structure:
  - EventServiceInterface
  - EventService
  - ApiResponse helper
  - Service binding via AppServiceProvider

---

## Frontend (React + Inertia)

- Components:
  - MapView
  - EventList
  - EventCard
  - FilterBar
  - MainLayout

- Data fetching: `fetch('/api/events')`

---

## Project Structure

    app/
      Services/
      Contracts/
      Support/

    resources/js/
      components/
      pages/
      lib/
      data/

---

## Screenshots

These screenshots demonstrate the main features of the application, including map interaction, event selection, and filtering.

<p align="center">
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-24-39.png" width="45%" />
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-24-50.png" width="45%" />
</p>

<p align="center">
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-24-59.png" width="45%" />
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-25-15.png" width="45%" />
</p>

<p align="center">
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-26-30.png" width="45%" />
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-25-57.png" width="45%" />
</p>

<p align="center">
  <img src="docs/images/Screenshot%20from%202026-04-02%2014-25-32.png" width="45%" />
</p>

---
## Author

Nafiseh Zeinali
