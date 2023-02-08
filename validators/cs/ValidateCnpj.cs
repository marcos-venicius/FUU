using System.Text.RegularExpressions;
using System.Linq;

public class ValidateCnpj
{
    private readonly string _cnpj;

    public ValidateCnpj(string cnpj)
    {
        _cnpj = cnpj;
    }

    public bool IsValid()
    {
        var cnpj = new Regex("\\D").Replace(_cnpj, "");

        if (cnpj.Length < 14)
            return false;
        
        var verifyingDigits = cnpj[^2..].Select(x => int.Parse(x.ToString())).ToList();
        var cnpjWithoutLastTwoDigits = cnpj[..^2].Select(x => int.Parse(x.ToString())).ToList();

        var testOne = new[] { 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };
        var testTwo = new[] { 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };

        var resultOne = new int[testOne.Length];
        var resultTwo = new int[testTwo.Length];

        for (var i = 0; i < testOne.Length; i++)
        {
            resultOne[i] = cnpjWithoutLastTwoDigits[i] * testOne[i];
        }

        var resultOneSum = resultOne.Sum();

        int verifyingDigitOne;

        if (resultOneSum % 11 < 2)
        {
            verifyingDigitOne = resultOneSum;
        }
        else
        {
            verifyingDigitOne = 11 - resultOneSum % 11;
        }

        if (verifyingDigits[0] != verifyingDigitOne)
            return false;

        cnpjWithoutLastTwoDigits.Add(verifyingDigitOne);

        for (var i = 0; i < testTwo.Length; i++)
        {
            resultTwo[i] = cnpjWithoutLastTwoDigits[i] * testTwo[i];
        }

        var resultTwoSum = resultTwo.Sum();

        int verifyingDigitTwo;

        if (resultTwoSum % 11 < 2)
        {
            verifyingDigitTwo = 0;
        }
        else
        {
            verifyingDigitTwo = 11 - resultTwoSum % 11;
        }

        return verifyingDigitTwo == verifyingDigits[1];
    }
}
