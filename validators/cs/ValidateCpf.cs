using System.Linq;
using System.Text.RegularExpressions;

public class ValidateCpf
{
    private readonly string _cpf;
    
    public ValidateCpf(string cpf)
    {
        _cpf = cpf;
    }

    public bool IsValid()
    {
        if (string.IsNullOrWhiteSpace(_cpf))
        {
            return false;
        }

        var cpf = new Regex("\\D").Replace(_cpf, "");

        if (cpf.Length != 11)
        {
            return false;
        }

        var verifyingDigits = cpf[^2..].Select(x => int.Parse(x.ToString())).ToList();
        var cpfWithoutLastTwoDigits = cpf[..9].Select(x => int.Parse(x.ToString())).ToList();

        var testOne = new[] { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
        var testTwo = new[] { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };

        int verifyingDigitOne;
        int verifyingDigitTwo;

        var resultOne = new int[testOne.Length];
        var resultTwo = new int[testTwo.Length];

        for (var i = 0; i < testOne.Length; i++)
        {
            resultOne[i] = cpfWithoutLastTwoDigits[i] * testOne[i];
        }

        var resultOneSum = resultOne.Sum();

        if (resultOneSum % 11 < 2)
            verifyingDigitOne = 0;
        else
            verifyingDigitOne = 11 - resultOneSum % 11;

        if (verifyingDigits[0] != verifyingDigitOne)
            return false;
        
        cpfWithoutLastTwoDigits.Add(verifyingDigitOne);

        for (var i = 0; i < testTwo.Length; i++)
        {
            resultTwo[i] = cpfWithoutLastTwoDigits[i] * testTwo[i];
        }

        var resultTwoSum = resultTwo.Sum();

        if (resultTwoSum % 11 < 2)
            verifyingDigitTwo = 0;
        else
            verifyingDigitTwo = 11 - resultTwoSum % 11;

        return verifyingDigits[1] == verifyingDigitTwo;
    }
}
