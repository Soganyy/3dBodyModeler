using Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Server.Repositories;

public class ModelInMongoDb : IModelRepository
{
    public const string databaseName = "Models";
    public const string collectionName = "Bodies";
    private readonly IMongoCollection<Model> bodyModelsCollection;

    public ModelInMongoDb() 
    {
        var connectionString = "";
        var client = new MongoClient(connectionString);
        var database = client.GetDatabase(databaseName);
        bodyModelsCollection = database.GetCollection<Model>(collectionName);
    }

    public IEnumerable<Model> GetModels() 
    {
        var models = bodyModelsCollection.Find(new BsonDocument());
        return models.ToList();
    }
    public void CreateModel(Model model)
    {
        bodyModelsCollection.InsertOne(model);
    }

    public void DeleteModel(Guid id)
    {
        bodyModelsCollection.DeleteOne(model => model.Id == id);
    }

    public Model GetModel(Guid id)
    {
        var modelById = bodyModelsCollection.Find<Model>(model => model.Id == id);
        return modelById.SingleOrDefault();
    }

    public void UpdateModel(Model updatedModel)
    {
        var filter = Builders<Model>.Filter.Eq(model => model.Id, updatedModel.Id);
        var update = Builders<Model>.Update
        .Set(model => model.Name, updatedModel.Name)
        .Set(model => model.Height, updatedModel.Height)
        .Set(model => model.ShoulderSize, updatedModel.ShoulderSize)
        .Set(model => model.WaistCircumference, updatedModel.WaistCircumference);

        bodyModelsCollection.UpdateOne(filter, update);
    }
}