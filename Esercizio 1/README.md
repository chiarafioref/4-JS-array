# ESERCIZIO

Dato un array di prodotti e uno di quantità, stampa se il prodotto è esaurito o se le scorte sono basse.

##  RAGIONAMENTO

- Creo una lista di prodotti
- inserisco le rispettive quantità
  - SE la quantità di un prodotto è uguale a 0
    - stampo "Prodotto esaurito"
  - ALTRIMENTI SE la quantità del prodotto è minore di 5
    - stampo "Scorte basse"
  - ALTRIMENTI
    - stampo "Prodotto disponibile"