using System.Security.Cryptography;
using System.Text;

public sealed class Sha256
{
    public string Hash(string password)
    {
        using var sha256 = SHA256.Create();

        byte[] inputBytes = Encoding.UTF8.GetBytes(password);
        byte[] hashBytes = sha256.ComputeHash(inputBytes);

        StringBuilder stringBuilder = new();

        for (int i = 0; i < hashBytes.Length; i++)
            stringBuilder.Append(hashBytes[i].ToString("x2"));

        return stringBuilder.ToString();
    }
}
