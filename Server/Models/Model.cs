namespace Server.Models;

public record Model 
{
    public Guid Id{ get; set; }
    public string? Name { get; set; }
    public int Height { get; set; }
    public int ShoulderSize { get; set; }
    public int WaistCircumference { get; set; }
}