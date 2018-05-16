package com.example.user.top10films;

import java.util.Arrays;

/**
 * Created by user on 11/01/2017.
 */

public class Rankings {

    Film[] films;

    public Rankings() {
        films = new Film[10];
    }

    public Rankings(Film[] films) {
        this.films = films.clone();
    }

    public Film getPlayerWithRanking(int ranking) {
        return films[ranking - 1];
    }

    public void replacePlayerAtBottom(Film film) {
        film.setRanking(films.length);
        films[films.length - 1] = film;
    }

    public void moveUp(Film film) {
        int currentIndex = Arrays.asList(films).indexOf(film);
        int currentRank = film.getRanking();
        int newIndex = currentIndex - 1;
        Film temp = films[newIndex];
        int newRank = temp.getRanking();
        temp.setRanking(currentRank);
        film.setRanking(newRank);
        films[newIndex] = film;
        films[currentIndex] = temp;
    }

    public void moveDown(Film film) {
        int currentIndex = Arrays.asList(films).indexOf(film);
        int currentRank = film.getRanking();
        int newIndex = currentIndex + 1;
        Film temp = films[newIndex];
        int newRank = temp.getRanking();
        temp.setRanking(currentRank);
        film.setRanking(newRank);
        films[newIndex] = film;
        films[currentIndex] = temp;
    }

    public Film findFilm(String name) {
        for (Film film : films) {
            if (film.getTitle() == name) {
                return film;
            }
        }
        return null;
    }
}
