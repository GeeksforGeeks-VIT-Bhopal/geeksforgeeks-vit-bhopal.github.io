/*
    Time Complexity = O(N * maxElement)
    Space Complexity = O(1)
    
    Where N is the length of the array.
    Where maxElement is the maximum element of the array.
*/

#include <limits.h>

bool isPresent(vector<int> &arr, int n, int val) {

    for (int i = 0; i < n; i++) {
        if (arr[i] == val) {
            return true;
        }
    }

    return false;

}
