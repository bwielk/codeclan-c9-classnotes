package com.codeclan.example.persistentdataexample;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

/**
 * Created by sandy on 10/08/2016.
 */
public class MainActivity extends AppCompatActivity {
    EditText textToSave;
    Button saveButton;
    TextView savedTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textToSave = (EditText)findViewById(R.id.text_to_save);
        saveButton = (Button)findViewById(R.id.save_button);
        savedTextView = (TextView)findViewById(R.id.saved_text);
        savedTextView.setVisibility(View.INVISIBLE);

        String savedText = SavedTextPreferences.getStoredText(this);

        if (savedText != null && !savedText.isEmpty()) {
            saveButton.setVisibility(View.INVISIBLE);
            textToSave.setVisibility(View.INVISIBLE);
            savedTextView.setVisibility(View.VISIBLE);
            savedTextView.setText(savedText);
        }

    }

    public void onSaveButtonClick(View view) {
        String stringToSave = textToSave.getText().toString();
        Log.d("PersistenceExample:", "Save Button Clicked!");
        Log.d("PersistenceExample:", "The text to save is: '" + stringToSave + "'");
        saveButton.setVisibility(View.INVISIBLE);
        textToSave.setVisibility(View.INVISIBLE);
        savedTextView.setVisibility(View.VISIBLE);
        savedTextView.setText(stringToSave);
        Context context = view.getContext();
        SavedTextPreferences.setStoredText(context, stringToSave);
    }



}
