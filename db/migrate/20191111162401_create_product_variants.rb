class CreateProductVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :product_variants do |t|
      t.string :name
      t.string :type
      t.string :value
      t.decimal :price
      t.integer :product_id

      t.timestamps
    end
  end
end
