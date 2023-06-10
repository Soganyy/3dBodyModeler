using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]

public class ModelController : ControllerBase 
{
    private readonly IModelRepository models;
    public ModelController(IModelRepository models) 
    {
        this.models = models;
    }

    [HttpGet]
    public IEnumerable<Model> GetModels()
    {
        var modelList = (models.GetModels()).Select(model => new Model{
            Id = model.Id,
            Name = model.Name,
            Height = model.Height,
            ShoulderSize = model.ShoulderSize,
            WaistCircumference = model.WaistCircumference
        });

        return modelList;
    }

    [HttpGet("{id}")]
    public IActionResult GetModel(Guid id)
    {
        var model = models.GetModel(id);
        if(model is null) 
        {
            return NotFound();
        }
        return Ok(model);
    }

    [HttpPost]
    public IActionResult CreateModel(Model model)
    {
        Model newModel = new()
        {
            Id = Guid.NewGuid(),
            Name = model.Name,
            Height = model.Height,
            ShoulderSize = model.ShoulderSize,
            WaistCircumference = model.WaistCircumference
        };

        models.CreateModel(newModel);

        return Ok(newModel);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateModel(Guid id, Model model)
    {
        var existingModel = models.GetModel(id);
        if(existingModel is null)
        {
            return NotFound();
        }

        Model updatedModel = existingModel with 
        {
            Name = model.Name,
            Height = model.Height,
            ShoulderSize = model.ShoulderSize,
            WaistCircumference = model.WaistCircumference
        };

        models.UpdateModel(updatedModel);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteModel(Guid id)
    {
        var existingModel = models.GetModel(id);
        if(existingModel is null) return NotFound();

        models.DeleteModel(id);
        
        return NoContent();
    }
}