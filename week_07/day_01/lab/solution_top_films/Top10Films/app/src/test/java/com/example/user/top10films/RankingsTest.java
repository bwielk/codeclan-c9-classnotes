package com.example.user.top10films;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by user on 11/01/2017.
 */
public class RankingsTest {
    Rankings rankings;
    Film film1;
    Film film2;
    Film film3;
    Film film4;
    Film film5;
    Film film6;
    Film film7;
    Film film8;
    Film film9;
    Film film10;


    @Before
    public void before() {rankings = new Rankings();

        film1 = new Film("Toy Story", "Animated", 1);
        film2 = new Film("Finding Nemo", "Animated", 2);
        film3 = new Film("Monsters Inc.", "Animated", 3);
        film4 = new Film("The Incredibles", "Animated", 4);
        film5 = new Film("Wall-E", "Animated", 5);
        film6 = new Film("Inside out", "Animated", 6);
        film7 = new Film("Cars", "Animated", 7);
        film8 = new Film("Ratatouille", "Animated", 8);
        film9 = new Film("Brave", "Animated" , 9);
        film10 = new Film("A Bugs Life", "Animated", 10);

        Film[] films = {film1, film2, film3, film4, film5, film6, film7, film8, film9, film10};
        rankings = new Rankings(films);
    }

    @Test
    public void testGetPlayerWithRanking() {
        Film film = rankings.getPlayerWithRanking(2);
        assertEquals(film2.getTitle(), film.getTitle());
        assertEquals(film2.getGenre(), film.getGenre());
        assertEquals(film2.getRanking(), film.getRanking());
    }

    @Test
    public void testReplacePlayerAtBottom() {
        Film newFilm = new Film("Up", "Animated", 11);
        rankings.replacePlayerAtBottom(newFilm);

        Film film = rankings.getPlayerWithRanking(10);
        assertEquals("Up", film.getTitle());
        assertEquals("Animated", film.getGenre());
        assertEquals(10, film.getRanking());
    }

    /* Extensions */
    @Test
    public void testMovePlayerUpRankings() {
        rankings.moveUp(film2);

        Film filmNowRanked1 = rankings.getPlayerWithRanking(1);
        Film filmNowRanked2 = rankings.getPlayerWithRanking(2);

        assertEquals(film2.getTitle(), filmNowRanked1.getTitle());
        assertEquals(film2.getGenre(), filmNowRanked1.getGenre());
        assertEquals(1, filmNowRanked1.getRanking());

        assertEquals(film1.getTitle(), filmNowRanked2.getTitle());
        assertEquals(film1.getGenre(), filmNowRanked2.getGenre());
        assertEquals(2, filmNowRanked2.getRanking());
    }

    @Test
    public void testMovePlayerDownRankings() {
        rankings.moveDown(film5);

        Film filmNowRanked5 = rankings.getPlayerWithRanking(5);
        Film filmNowRanked6 = rankings.getPlayerWithRanking(6);

        assertEquals(film5.getTitle(), filmNowRanked6.getTitle());
        assertEquals(film5.getGenre(), filmNowRanked6.getGenre());
        assertEquals(6, filmNowRanked6.getRanking());

        assertEquals(film6.getTitle(), filmNowRanked5.getTitle());
        assertEquals(film6.getGenre(), filmNowRanked5.getGenre());
        assertEquals(5, filmNowRanked5.getRanking());
    }

    @Test
    public void testFindPlayerReturnsPlayer() {
        Film film = rankings.findFilm("Finding Nemo");
        assertNotNull(film);
        assertEquals("Finding Nemo", film.getTitle());
        assertEquals("Animated", film.getGenre());
        assertEquals(2, film.getRanking());
    }

    @Test
    public void testFindPlayerReturnsNull() {
        Film film = rankings.findFilm("The Incredibles 2");
        assertNull(film);
    }

}