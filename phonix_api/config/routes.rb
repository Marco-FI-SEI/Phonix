Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      post "/tokensignin", to: "validators#check"
    end
  end
end
