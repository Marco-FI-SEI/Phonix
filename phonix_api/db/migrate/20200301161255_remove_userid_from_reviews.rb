class RemoveUseridFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :user_id, :string
  end
end
