bool isConsecutive(vector<int> &arr, int n) {
    
    // Get minimum element
    int minEle = INT_MAX;

    for (int i = 0; i < n; i++) {
        minEle = min(minEle, arr[i]);
    }

    // Get maximum element
    int maxEle = INT_MIN;

    for (int i = 0; i < n; i++) {
        maxEle = max(maxEle, arr[i]);
    }

    if (maxEle - minEle + 1 != n) {
        return false;
    }

    for (int val = minEle; val <= maxEle; val++) {
        if (!isPresent(arr, n, val)) {
            return false;
        }
    }

    return true;

}
