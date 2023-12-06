    // Functie om de tafel van een opgegeven getal te genereren
    function genereerTafel(getal) {
        // Loop van 1 tot 10 voor de opgegeven tafel
        for (let i = 1; i <= 10; i++) {
            // Bereken het resultaat van de tafel
            let resultaat = i * getal;
            // Maak een nieuw paragraaf element aan
            let paragraaf = document.createElement("p");
            // Voeg de tekst toe aan het paragraaf element
            paragraaf.textContent = i + " x " + getal + " = " + resultaat;
            // Voeg het paragraaf element toe aan de body van het document
            document.body.appendChild(paragraaf);
        }
    }

    // Roep de functie aan met het gewenste getal (bijv. 7 voor de tafel van 7)
    genereerTafel(8);