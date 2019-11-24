class ChangePriceToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :product_variants, :price, :decimal, precision: 8, scale: 2
  end
end
