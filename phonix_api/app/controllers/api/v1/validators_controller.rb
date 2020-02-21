class Api::V1::ValidatorsController < ApplicationController
  def check
    google_client_id = "213179697215-iop41i8oenuno9ns0muslgti1vf72rif.apps.googleusercontent.com"

    token = params[:id_token]
    validator = Validator.new(google_client_id)

    if validator.isValid?(token)
      render json: { message: "SUCCESS"}, status: :ok
    end
  end
end
