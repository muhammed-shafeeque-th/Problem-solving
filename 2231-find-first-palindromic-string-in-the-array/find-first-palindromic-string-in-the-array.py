class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            reversed = word[::-1]
            if reversed == word:
                return word

        return ""
        