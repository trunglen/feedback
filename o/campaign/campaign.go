package campaign

import (
	"feedback/x/db/mongodb"
)

type Campaign struct {
	mongodb.BaseModel `bson:",inline"`
	Name              string   `bson:"name" json:"name"`
	Surveys           []string `bson:"surveys" json:"surveys"`
	Devices           []string `bson:"devices" json:"devices"`
	Start             int64    `bson:"start" json:"start"`
	End               int64    `bson:"end" json:"end"`
}
