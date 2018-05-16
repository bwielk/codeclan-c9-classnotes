package com.codeclan.example.persistentdataexample;

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
    TextView savedText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textToSave = (EditText)findViewById(R.id.text_to_save);
        saveButton = (Button)findViewById(R.id.save_button);
        savedText = (TextView)findViewById(R.id.saved_text);
        savedText.setVisibility(View.INVISIBLE);

    }

    public void onSaveButtonClick(View view) {
        String stringToSave = textToSave.getText().toString();
        Log.d("PersistenceExample:", "Save Button Clicked!");
        Log.d("PersistenceExample:", "The text to save is: '" + textToSave + "'");
        saveButton.setVisibility(View.INVISIBLE);
        textToSave.setVisibility(View.INVISIBLE);
        savedText.setVisibility(View.VISIBLE);
        savedText.setText(stringToSave);
    }

}
