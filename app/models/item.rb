class Item < ActiveRecord::Base
  attr_accessible :description, :name
  has_many :images
  scope :search, lambda {|search| where("name like? ", "%#{search}%").order(:created_at)}
end
