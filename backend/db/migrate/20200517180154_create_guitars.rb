class CreateGuitars < ActiveRecord::Migration[6.0]
  def change
    create_table :guitars do |t|
      t.string :name
      t.string :category
      t.integer :year
      t.string :brand_id

      t.timestamps
    end
  end
end
