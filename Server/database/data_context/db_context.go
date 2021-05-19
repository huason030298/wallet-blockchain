package data_context

import (
	"context"
	"sync"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type singleton struct {
	DB  *mongo.Database
	Err error
}

var instance *singleton
var mu sync.Mutex

const DBContext = "mongodb+srv://root:root@cluster0.10g9w.mongodb.net/moviebookingdb?authSource=admin&replicaSet=atlas-14hex6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

func GetInstance() *singleton {
	if instance == nil {
		mu.Lock()
		defer mu.Unlock()
		if instance == nil {
			instance = &singleton{}
			instance.connectDB()
		}
	}
	return instance
}

func (instance *singleton) connectDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(DBContext))
	if err != nil {
		*instance = singleton{nil, err}
	}
	*instance = singleton{client.Database("mycoinDB"), nil}
}
