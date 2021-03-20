/*
	Time Complexity: O(N)
	Space complexity: O(1)

	Where 'N' is the missing of elements in the given sequence.
*/

int missingNumber(vector<int> &arr, int n) {
    /*
           The first term and (n+1)th term of the AP will be b[0] and b[n-1].
           So using the formula the common difference d will be given by
           d = (b[n-1] - b[0]) / n
         */

    int d = (arr[n - 1] - arr[0]) / n;
    int missing = -1;
    // Traverse on each element to find position of missing number
    for (int i = 0; i + 1 < n; ++i) {
        int diff = arr[i + 1] - arr[i];
        // If the difference is not same as the common difference of the AP, then missing number will lie between the range b[i] to b[i+1]
        if (diff != d) {
            missing = arr[i] + d;
            break;
        }
    }
    // return the missing number
    return missing;
}
