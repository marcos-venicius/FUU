using System.Text.RegularExpressions;

public static class ValidateEmail
{
    public static bool IsValid(string email)
    {
        if (string.IsNullOrWhiteSpace(email)) return false;

        string pattern = @"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

        Regex regex = new Regex(pattern);

        return regex.IsMatch(email);
    }
}
