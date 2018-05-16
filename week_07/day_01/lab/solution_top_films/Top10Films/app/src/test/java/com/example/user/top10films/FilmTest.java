package com.example.user.top10films;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

/**
 * Created by user on 11/01/2017.
 */

public class FilmTest {
    Film film;

    @Before
    public void before(){
        film = new Film("Up", "Animated", 1);
    }

    @Test
    public void canGetFilmTitle(){
        assertEquals("Up", film.getTitle());
    }

    @Test
    public void canChangeTitle(){
        film.changeTitle("Incredibles");
        assertEquals("Incredibles", film.getTitle());
    }

    @Test
    public void filmHasGenre(){
        assertEquals("Animated", film.getGenre());
    }

    @Test
    public void filmGenreCanChange(){
        film.changeGenre("Cartoon");
        assertEquals("Cartoon", film.getGenre());
    }

    @Test
    public void filmHasRanking(){
        assertEquals(1, film.getRanking());
    }

    @Test
    public void filmRankingCanBeUpdated(){
        film.updateRanking(2);
        assertEquals(2, film.getRanking());
    }

    @Test
    public void hasPrettyString(){
        assertEquals("Title: 'Up', Genre: 'Animated', Ranking: 1", film.prettyString());
    }
}
