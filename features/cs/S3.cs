using System.Text;
using Amazon.S3;
using Amazon.S3.Model;

public sealed class S3
{
    private readonly ILogger<S3> _logger;
    private readonly IAmazonS3 _s3;
    private const string BucketName = "<bucket-name>";

    public S3(ILogger<S3> logger, IAmazonS3 s3)
    {
        _logger = logger;
        _s3 = s3;
    }

    private const string BasePath = "<folder-path-where-files-will-be-handled>";

    public async Task DeleteFileAsync(string fullpath)
    {
        _logger.LogDebug("the file {file} will be deleted", fullpath);

        var deleteObjectRequest = new DeleteObjectRequest
        {
            Key = fullpath,
            BucketName = BucketName
        };

        await _s3.DeleteObjectAsync(deleteObjectRequest);

        _logger.LogDebug("the file {file} was successfully deleted", fullpath);
    }

    private static string GenerateFileName(string contentType)
    {
        var extension = ".txt";
        var split = contentType.Split('/');

        if (split.Length >= 2)
            extension = $".{split[1]}";

        var guid = Guid.NewGuid();

        return $"{guid}{extension}";
    }

    private static string GetFolderName(string? folder)
    {
        StringBuilder folderPath = new(BasePath);

        if (folder is not null)
        {
            folderPath.Append(folder.Trim());

            if (!folderPath.ToString().EndsWith("/"))
                folderPath.Append("/");
        }

        return folderPath.ToString();
    }

    public async Task<string> UploadFileAsync(IFormFile file, string? folder = null)
    {
        var filename = GenerateFileName(file.ContentType);
        var folderPath = GetFolderName(folder);
        var fullPath = $"{folderPath}{filename}";

        _logger.LogDebug("[FILE_UPLOAD] file name: {0}", filename);
        _logger.LogDebug("[FILE_UPLOAD] folder path: {0}", folderPath);
        _logger.LogDebug("[FILE_UPLOAD] full path: {0}", fullPath);

        var stream = file.OpenReadStream();

        var uploadFileRequest = new PutObjectRequest
        {
            Key = fullPath,
            BucketName = BucketName,
            InputStream = stream,
            AutoCloseStream = true,
            ContentType = file.ContentType
        };

        await _s3.PutObjectAsync(uploadFileRequest);

        _logger.LogDebug("[FILE_UPLOAD] file uploaded successfully");

        return fullPath;
    }
}
