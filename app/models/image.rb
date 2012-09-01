class Image < ActiveRecord::Base
  attr_accessible :item_id, :image, :remote_image_url
  belongs_to :item
  mount_uploader :image, ImageUploader
end
