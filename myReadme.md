Stwórz komponent Message, który będzie przyjmował w propsach:

typ (info, warning, danger)
oraz treść wiadomości.
W zależności od typu powinien zmieniać się kolor tła oraz obramowania tego komponentu.

Komponent może być osadzony w głównej aplikacji. Domyślnie będzie ukryty. Będziemy go pokazywali dispatchując akcje - np. stwórzmy kawałek stanu aplikacji ui, a w nim tablicę messages. Do niego kreator np. addMessage, który przyjmie typ oraz wiadomość, a następnie doda nasz komunikat do tablicy wiadomości.

Zróbmy dispatch tych kreatorów w momencie, gdy korzystamy z przycisków w zadaniu pierwszym. Czyli wyświetlajmy wiadomości w trakcie ładowania, resetowania i dodawania do naszej listy użytkowników.

//https://codesandbox.io/s/cool-violet-t9fvg?file=/src/redux.js