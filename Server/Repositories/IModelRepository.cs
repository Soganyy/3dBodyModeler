using Server.Models;

namespace Server.Repositories;

public interface IModelRepository 
{
    IEnumerable<Model> GetModels();
    Model GetModel(Guid id);
    void CreateModel(Model model);
    void UpdateModel(Model updatedModel);
    void DeleteModel(Guid id);
}