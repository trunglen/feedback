package rest

import (
	"net/http"
)

type IHttpError interface {
	StatusCode() int
}
type BadRequest string

func (e BadRequest) Error() string {
	return string(e)
}

func (e BadRequest) StatusCode() int {
	return http.StatusBadRequest
}

func WrapBadRequest(err error, message string) error {
	if err != nil {
		return BadRequest(message + ":" + err.Error())
	}
	return nil
}

type Unauthorized string

func (e Unauthorized) Error() string {
	return string(e)
}

func (e Unauthorized) StatusCode() int {
	return http.StatusUnauthorized
}

type InternalServerError string

func (e InternalServerError) Error() string {
	return string(e)
}

func (e InternalServerError) StatusCode() int {
	return http.StatusInternalServerError
}

type NotFound string

func (e NotFound) Error() string {
	return string(e)
}

func (e NotFound) StatusCode() int {
	return http.StatusNotFound
}

func AssertNil(errs ...error) {
	for _, err := range errs {
		if err != nil {
			panic(err)
		}
	}

}
func IsNotFound(err error) bool {
	if err.Error() == "not found" {
		return true
	}
	return false
}
