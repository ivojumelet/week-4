// Loop van 1 tot 10
for (let i = 1; i <= 10; i++) {
    // Bereken het resultaat van de tafel van 10
    let resultaat = i * 10;
    // Maak een nieuw paragraaf element aan
    let paragraaf = document.createElement("p");
    // Voeg de tekst toe aan het paragraaf element
    paragraaf.textContent = i + " x 10 = " + resultaat;
    // Voeg het paragraaf element toe aan de body van het document
    document.body.appendChild(paragraaf);}