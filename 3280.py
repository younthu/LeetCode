# https://leetcode.com/problems/convert-date-to-binary/
class Solution:
    def convertDateToBinary(self, date: str) -> str:
        return "-".join(map(lambda x: bin(int(x))[2:], date.split("-")))