import requests from "../requests";
import api from "../api/index";

export const fetchTrending = async () => await api.get(requests.fetchTrending)

export const fetchOriginals = async () => await api.get(requests.fetchNetflixOriginals)

export const fetchTopRated = async () => await api.get(requests.fetchTopRated)

export const fetchActionMovies = async () => await api.get(requests.fetchActionMovies)

export const fetchComedyMovies = async () => await api.get(requests.fetchComedyMovies)

export const fetchDocumentaries = async () => await api.get(requests.fetchDocumentaries)

export const fetchHorroMovies = async () => await api.get(requests.fetchHorroMovies)

export const fetchRomanceMovies = async () => await api.get(requests.fetchRomanceMovies)