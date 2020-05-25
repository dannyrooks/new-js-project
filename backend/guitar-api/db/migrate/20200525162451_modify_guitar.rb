class ModifyGuitar < ActiveRecord::Migration[6.0]
  def change
    add_column :guitars, :brand_name, :string
  end
end
