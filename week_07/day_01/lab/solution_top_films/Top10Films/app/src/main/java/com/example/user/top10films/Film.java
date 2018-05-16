package com.example.user.top10films;

/**
 * Created by user on 11/01/2017.
 */
public class Film {
    private String title;
    private String genre;
    private int ranking;

    public Film(String title, String genre, int ranking){
        this.title = title;
        this.genre = genre;
        this.ranking = ranking;
    }


    public String getTitle() {
        return title;
    }

    public void changeTitle(String newTitle) {
        this.title = newTitle;
    }

    public String getGenre() {
        return genre;
    }

    public void changeGenre(String newGenre) {
        this.genre = newGenre;
    }

    public int getRanking() {
        return ranking;
    }

    public void updateRanking(int newRanking) {
        this.ranking = newRanking;
    }

    public String prettyString() {
        return "Title: '"+ this.title + "', Genre: '"+this.genre+"', Ranking: "+this.ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

}
