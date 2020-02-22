class CreateHeadphones < ActiveRecord::Migration[6.0]
  def change
    create_table :headphones do |t|
      t.string :model
      t.string :manufacturer
      t.timestamps
    end
  end
end
