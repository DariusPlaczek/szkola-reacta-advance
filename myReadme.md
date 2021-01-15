Krok 1 - Przygotowanie: Przygotuj dwa komponenty Home oraz Users. Każdy z nich osadź w routingu (np. Home pod adresem /, Users pod adresem /users). Komponent Users niech wyświetla listę 10 użytkowników pobraną za pomocą API z https://randomuser.me/ lub Mock Service Worker za każdym razem, gdy wejdziemy w ten komponent (czyli po jego zamontowaniu).

Krok 2 - Zmodyfikuj komponent Home w taki sposób, aby posiadał na ekranie 3 przyciski z odpowiednimi funkcjami:

Load - załadowanie na nowo 10 użytkowników do stanu przechowującego użytkowników
Reset - wyzerowanie listy użytkowników
Add - pobiera jeszcze raz listę, ale dodaje tylko jednego użytkownika do tej już istniejącej

Krok 3 - Zmodyfikuj komponent Users w taki sposób, aby po zamontowaniu sprawdzał, czy istnieją już użytkownicy w stanie aplikacji. Jeśli tak, to wyświetl tę listę. Jeśli nie, pobierz dane z API. Po przejściu na Home oraz powrót do Users komponent powinien wstawiać dane ze stanu aplikacji, który pełni w tym przypadku rodzaj cache.

//https://codesandbox.io/s/cool-violet-t9fvg?file=/src/redux.js