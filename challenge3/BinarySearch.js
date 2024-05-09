public class Main {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] sortedArray = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int target = 7;

        int resultIndex = binarySearch(sortedArray, target);

        if (resultIndex != -1)
            System.out.println("Element " + target + " found at index " + resultIndex + ".");
        else
            System.out.println("Element " + target + " not found in the array.");
    }
}
