package com.accenture.letovit.todolist.validator;

import com.accenture.letovit.todolist.ToDoItem;

/**
 * This class is used for validating our input from front-end.
 */
public class ToDoItemValidator {
	
	private static final String List = null;

	public static void validate(ToDoItem toDoItem) {
		// title should not be too long
		if (toDoItem.getTitle().length() > 30) {
			throw new RuntimeException("Title is longer than 20 characters.");
		}
		// text should not be too long
		if (toDoItem.getText().length() > 250) {
			throw new RuntimeException("Text is longer than 250 characters.");
		}
		
		String[] profanities = { "fuck", "kurva" , "piča" , "kokot" };
		for(int i = 0; i < profanities.length; i++) {			
		if(toDoItem.getText().contains(profanities[i])) {
			throw new RuntimeException("Text contains profanity.");
		}
		else if(toDoItem.getTitle().contains(profanities[i])) {
			throw new RuntimeException("Text contains profanity.");
		};
		}
		// validate characters in title
		for(int i=0; i<toDoItem.getTitle().length(); i++) {
			Character znak = toDoItem.getTitle().charAt(i);
			if (!Character.isLetterOrDigit(znak) && !Character.isSpaceChar(znak)) {
				throw new RuntimeException("Invalid character '"+znak +"' in title.");
			}
		}
	}

	private static void elif(boolean contains) {
		// TODO Auto-generated method stub
		
	}
}
