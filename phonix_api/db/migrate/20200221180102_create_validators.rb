class CreateValidators < ActiveRecord::Migration[6.0]
  def change
    create_table :validators do |t|

      t.timestamps
    end
  end
end
