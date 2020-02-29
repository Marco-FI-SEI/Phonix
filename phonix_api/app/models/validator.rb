class Validator
  def initialize(google_client_id)
    @google_client_id = google_client_id
  end

  def isValid?(token)
    validator = GoogleIDToken::Validator.new
    begin
      @payload = validator.check(token, @google_client_id)
    rescue GoogleIDToken::ValidationError => e
      puts "Cannot validate: #{e}"
    end
  end

  def get_payload
    @payload
  end
end
