class ChangeDatatypeUseridHeadphoneidInReviews < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :user_id, :string
    change_column :reviews, :headphone_id, :string
  end
end



