import java.util.Scanner;

public class Main {
    public static int countWords(String sentence) {
        String[] words = sentence.split("\\s+");
        return words.length;
    }

    public static String reverseWords(String sentence) {

        String[] words = sentence.split("\\s+");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i > 0) {
                reversed.append(" ");
            }
        }
        return reversed.toString();
    }

    public static String replaceSpacesWithHyphens(String sentence) {
        return sentence.replace(' ', '-');
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();

        // Count words
        int wordCount = countWords(inputSentence);
        System.out.println("Number of words: " + wordCount);

        // Reverse words
        String reversedSentence = reverseWords(inputSentence);
        System.out.println("Reversed sentence: " + reversedSentence);

        // Replace spaces with hyphens
        String hyphenatedSentence = replaceSpacesWithHyphens(inputSentence);
        System.out.println("Hyphenated sentence: " + hyphenatedSentence);

        scanner.close();
    }
}
