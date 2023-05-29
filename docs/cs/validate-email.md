# Validate Email

To use this static method to validate the email format like:

### Valid formats
```cs
bool isValid = ValidateEmail.IsValid("email@example.com");

Console.WriteLine($"Email is valid: {isValid}"); // Email is valid: true
```

### Invalid format
```cs
bool isValid = ValidateEmail.IsValid("email.example.com");

Console.WriteLine($"Email is valid: {isValid}"); // Email is valid: false
```

### Empty values
```cs
bool isValid = ValidateEmail.IsValid("");

Console.WriteLine($"Email is valid: {isValid}"); // Email is valid: false
```
```cs
bool isValid = ValidateEmail.IsValid("      ");

Console.WriteLine($"Email is valid: {isValid}"); // Email is valid: false
```
```cs
bool isValid = ValidateEmail.IsValid(null);

Console.WriteLine($"Email is valid: {isValid}"); // Email is valid: false
```
