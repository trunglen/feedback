package survey

func Update(newSurvey *Survey) error {
	return SurveyTable.UpdateID(newSurvey.ID, newSurvey)
}
