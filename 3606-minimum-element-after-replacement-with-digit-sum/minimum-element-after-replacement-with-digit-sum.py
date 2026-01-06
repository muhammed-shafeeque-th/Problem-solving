class Solution:
    def minElement(self, nums: List[int]) -> int:
        return min([sum(int(n) for n in str(num)) for num in nums])
        