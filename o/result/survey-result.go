package result

import (
	"feedback/x/db/mongodb"
)

type SurveyResult struct {
	mongodb.BaseModel `bson:",inline"`
	SurveyID          string
}
