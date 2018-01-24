package utils

import (
	"strconv"
	"time"
)

func Float32ToPercentString(num float32) string {
	num = num * 100
	return strconv.FormatFloat(float64(num), 'f', 2, 32) + "%"
}
func UnixToDate(unix int) string {
	return time.Unix(int64(unix), 0).Format("dd/MM/yyyy")
}
